import type {
  IPet,
  ImageRef,
  Category,
  Size,
  Sex,
  AdoptionStatus,
} from '../domain/pets';

export class Pet implements IPet {
  id!: string;
  name!: string;
  description!: string;
  ageYears!: number;
  category!: Category;
  breed?: string;
  sex!: Sex;
  size!: Size;
  weightKg?: number;
  image!: ImageRef;
  gallery: ImageRef[];
  location!: string;
  goodWith?: { children?: boolean; dogs?: boolean; cats?: boolean };
  vaccinated?: boolean;
  neutered?: boolean;
  microchipped?: boolean;
  status!: AdoptionStatus;

  constructor(props: IPet) {
    if (!props.id) throw new Error('Pet requires an id');
    if (!props.name) throw new Error('Pet requires a name');
    if (!props.image?.url) throw new Error('Pet requires a primary image url');

    this.gallery = props.gallery ?? [];

    Object.assign(this, { ...props, gallery: this.gallery });
  }

  primaryImage(): ImageRef {
    return this.image ?? this.gallery[0];
  }

  ageLabel(): string {
    return this.ageYears === 1 ? '1 year' : `${this.ageYears} years`;
  }

  isAvailable(): boolean {
    return this.status === 'available';
  }

  addGalleryImage(img: ImageRef) {
    this.gallery = [...this.gallery, img];
  }

  matchesQuery(q: string): boolean {
    const needle = q.trim().toLowerCase();
    if (!needle) return true;
    const hay = [
      this.name,
      this.description,
      this.breed ?? '',
      this.category,
      this.location,
      this.size,
      this.sex,
      this.status,
    ]
      .join(' ')
      .toLowerCase();
    return hay.includes(needle);
  }
}