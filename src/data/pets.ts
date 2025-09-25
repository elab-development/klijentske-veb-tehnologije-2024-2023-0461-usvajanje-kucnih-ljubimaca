import type { ImageRef } from '../domain/pets';
import { Pet } from '../models/Pet';

const img = (url: string, alt: string): ImageRef => ({ url, alt });

export const PETS: Pet[] = [
  new Pet({
    id: 'pet_bella',
    name: 'Bella',
    description:
      'Gentle Golden Retriever who loves long walks and belly rubs. Great with kids and other dogs.',
    ageYears: 3,
    category: 'dog',
    breed: 'Golden Retriever',
    sex: 'female',
    size: 'large',
    weightKg: 29,
    image: img(
      'https://images.unsplash.com/photo-1558944351-c3ad5d2b4a2b?q=80&w=1600&auto=format&fit=crop',
      'Bella the Golden Retriever'
    ),
    gallery: [
      img(
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1600&auto=format&fit=crop',
        'Bella outdoors'
      ),
    ],
    location: 'Belgrade, RS',
    goodWith: { children: true, dogs: true, cats: false },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_max',
    name: 'Max',
    description:
      'Playful mixed-breed with lots of energy. Loves fetch and squeaky toys.',
    ageYears: 2,
    category: 'dog',
    breed: 'Mixed',
    sex: 'male',
    size: 'medium',
    weightKg: 18,
    image: img(
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop',
      'Max the mixed-breed dog'
    ),
    gallery: [
      img(
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
        'Max at the park'
      ),
    ],
    location: 'Novi Sad, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'pending',
  }),

  new Pet({
    id: 'pet_luna',
    name: 'Luna',
    description:
      'Smart Border Collie who enjoys agility and learning new tricks. Needs an active family.',
    ageYears: 1,
    category: 'dog',
    breed: 'Border Collie',
    sex: 'female',
    size: 'medium',
    weightKg: 16,
    image: img(
      'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1600&auto=format&fit=crop',
      'Luna the Border Collie'
    ),
    gallery: [],
    location: 'Kragujevac, RS',
    goodWith: { children: true, dogs: true },
    vaccinated: true,
    neutered: false,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_daisy',
    name: 'Daisy',
    description:
      'Sweet Beagle with a curious nose. Loves trail walks and gentle cuddles.',
    ageYears: 4,
    category: 'dog',
    breed: 'Beagle',
    sex: 'female',
    size: 'medium',
    weightKg: 11,
    image: img(
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop',
      'Daisy the Beagle'
    ),
    gallery: [],
    location: 'Čačak, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_rocky',
    name: 'Rocky',
    description:
      'Loyal German Shepherd, well-trained and protective, looking for an experienced owner.',
    ageYears: 5,
    category: 'dog',
    breed: 'German Shepherd',
    sex: 'male',
    size: 'large',
    weightKg: 34,
    image: img(
      'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1600&auto=format&fit=crop',
      'Rocky the German Shepherd'
    ),
    gallery: [],
    location: 'Zaječar, RS',
    goodWith: { children: true, dogs: false, cats: false },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_milo',
    name: 'Milo',
    description:
      'Friendly Labrador who thinks every human is a best friend. Excellent family dog.',
    ageYears: 2,
    category: 'dog',
    breed: 'Labrador Retriever',
    sex: 'male',
    size: 'large',
    weightKg: 30,
    image: img(
      'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1600&auto=format&fit=crop',
      'Milo the Labrador'
    ),
    gallery: [],
    location: 'Kraljevo, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'pending',
  }),

  new Pet({
    id: 'pet_coco',
    name: 'Coco',
    description:
      'Adorable French Bulldog with a goofy personality. Loves short strolls and naps.',
    ageYears: 3,
    category: 'dog',
    breed: 'French Bulldog',
    sex: 'female',
    size: 'small',
    weightKg: 10,
    image: img(
      'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?q=80&w=1600&auto=format&fit=crop',
      'Coco the French Bulldog'
    ),
    gallery: [],
    location: 'Smederevo, RS',
    goodWith: { children: true, dogs: true, cats: false },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_charlie',
    name: 'Charlie',
    description:
      'Energetic Jack Russell who loves agility games and puzzle toys.',
    ageYears: 2,
    category: 'dog',
    breed: 'Jack Russell Terrier',
    sex: 'male',
    size: 'small',
    weightKg: 8,
    image: img(
      'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=1600&auto=format&fit=crop',
      'Charlie the Jack Russell'
    ),
    gallery: [],
    location: 'Niš, RS',
    goodWith: { children: true, dogs: true, cats: false },
    vaccinated: true,
    neutered: false,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_buddy',
    name: 'Buddy',
    description:
      'Calm mixed-breed rescued from the streets, now ready for a loving home.',
    ageYears: 6,
    category: 'dog',
    breed: 'Mixed',
    sex: 'male',
    size: 'medium',
    weightKg: 20,
    image: img(
      'https://images.unsplash.com/photo-1507149833265-60c372daea2e?q=80&w=1600&auto=format&fit=crop',
      'Buddy the friendly dog'
    ),
    gallery: [],
    location: 'Pančevo, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'adopted',
  }),

  new Pet({
    id: 'pet_bruno',
    name: 'Bruno',
    description:
      'Strong but gentle Rottweiler; enjoys training and clear routines.',
    ageYears: 4,
    category: 'dog',
    breed: 'Rottweiler',
    sex: 'male',
    size: 'large',
    weightKg: 40,
    image: img(
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b6?q=80&w=1600&auto=format&fit=crop',
      'Bruno the Rottweiler'
    ),
    gallery: [],
    location: 'Šabac, RS',
    goodWith: { children: false, dogs: false, cats: false },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_oliver',
    name: 'Oliver',
    description:
      'Curious domestic shorthair cat who loves sunbeams and window watching.',
    ageYears: 4,
    category: 'cat',
    breed: 'Domestic Shorthair',
    sex: 'male',
    size: 'small',
    weightKg: 5,
    image: img(
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1600&auto=format&fit=crop',
      'Oliver the cat'
    ),
    gallery: [
      img(
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop',
        'Oliver relaxing'
      ),
    ],
    location: 'Belgrade, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_nala',
    name: 'Nala',
    description:
      'Talkative Siamese with a big personality. Loves lap time and gentle play.',
    ageYears: 2,
    category: 'cat',
    breed: 'Siamese',
    sex: 'female',
    size: 'small',
    weightKg: 4,
    image: img(
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600&auto=format&fit=crop',
      'Nala the Siamese'
    ),
    gallery: [],
    location: 'Niš, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_simba',
    name: 'Simba',
    description:
      'Laid-back Maine Coon; big fluff, bigger heart. Enjoys brushing and calm company.',
    ageYears: 5,
    category: 'cat',
    breed: 'Maine Coon',
    sex: 'male',
    size: 'large',
    weightKg: 7,
    image: img(
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1600&auto=format&fit=crop',
      'Simba the Maine Coon'
    ),
    gallery: [],
    location: 'Subotica, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'adopted',
  }),

  new Pet({
    id: 'pet_oreo',
    name: 'Oreo',
    description:
      'Black-and-white tuxedo cat; playful and affectionate, loves feather toys.',
    ageYears: 1,
    category: 'cat',
    breed: 'Tuxedo',
    sex: 'male',
    size: 'small',
    weightKg: 4.2,
    image: img(
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop',
      'Oreo the tuxedo cat'
    ),
    gallery: [],
    location: 'Kruševac, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_misty',
    name: 'Misty',
    description:
      'Shy Russian Blue who warms up with gentle attention and treats.',
    ageYears: 3,
    category: 'cat',
    breed: 'Russian Blue',
    sex: 'female',
    size: 'small',
    weightKg: 4.5,
    image: img(
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1600&auto=format&fit=crop',
      'Misty the Russian Blue'
    ),
    gallery: [],
    location: 'Zrenjanin, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'pending',
  }),

  new Pet({
    id: 'pet_jasper',
    name: 'Jasper',
    description:
      'Confident British Shorthair; calm companion who enjoys sunny naps.',
    ageYears: 4,
    category: 'cat',
    breed: 'British Shorthair',
    sex: 'male',
    size: 'medium',
    weightKg: 6,
    image: img(
      'https://images.unsplash.com/photo-1464219222984-216ebffaaf85?q=80&w=1600&auto=format&fit=crop',
      'Jasper the British Shorthair'
    ),
    gallery: [],
    location: 'Novi Pazar, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_cleo',
    name: 'Cleo',
    description:
      'Elegant Abyssinian; intelligent and active, loves climbing perches.',
    ageYears: 2,
    category: 'cat',
    breed: 'Abyssinian',
    sex: 'female',
    size: 'small',
    weightKg: 3.8,
    image: img(
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1600&auto=format&fit=crop',
      'Cleo the Abyssinian'
    ),
    gallery: [],
    location: 'Sombor, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_leo',
    name: 'Leo',
    description:
      'Curious Bengal who enjoys interactive play and mental challenges.',
    ageYears: 3,
    category: 'cat',
    breed: 'Bengal',
    sex: 'male',
    size: 'medium',
    weightKg: 5.5,
    image: img(
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1600&auto=format&fit=crop',
      'Leo the Bengal'
    ),
    gallery: [],
    location: 'Kikinda, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_pepper',
    name: 'Pepper',
    description: 'Friendly Calico with a gentle nature; loves chin scratches.',
    ageYears: 5,
    category: 'cat',
    breed: 'Calico',
    sex: 'female',
    size: 'small',
    weightKg: 4.6,
    image: img(
      'https://images.unsplash.com/photo-1517092211510-6a4c8e1e6b8a?q=80&w=1600&auto=format&fit=crop',
      'Pepper the calico'
    ),
    gallery: [],
    location: 'Užice, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'adopted',
  }),

  new Pet({
    id: 'pet_felix',
    name: 'Felix',
    description:
      'Playful Norwegian Forest cat; fluffy, gentle giant who enjoys brushing.',
    ageYears: 2,
    category: 'cat',
    breed: 'Norwegian Forest',
    sex: 'male',
    size: 'large',
    weightKg: 6.5,
    image: img(
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1600&auto=format&fit=crop',
      'Felix the Norwegian Forest cat'
    ),
    gallery: [],
    location: 'Leskovac, RS',
    goodWith: { children: true, dogs: true, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: true,
    status: 'available',
  }),

  new Pet({
    id: 'pet_willow',
    name: 'Willow',
    description:
      'Friendly lop rabbit who likes gentle petting and leafy greens. Indoor home preferred.',
    ageYears: 1,
    category: 'rabbit',
    breed: 'Lop',
    sex: 'female',
    size: 'small',
    weightKg: 2,
    image: img(
      'https://images.unsplash.com/photo-1545194826-3c9c3be45fa6?q=80&w=1600&auto=format&fit=crop',
      'Willow the rabbit'
    ),
    gallery: [],
    location: 'Zrenjanin, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: false,
    microchipped: false,
    status: 'available',
  }),

  new Pet({
    id: 'pet_snow',
    name: 'Snow',
    description:
      'White dwarf rabbit, gentle and tidy; enjoys quiet spaces and soft bedding.',
    ageYears: 2,
    category: 'rabbit',
    breed: 'Dwarf',
    sex: 'male',
    size: 'small',
    weightKg: 1.6,
    image: img(
      'https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?q=80&w=1600&auto=format&fit=crop',
      'Snow the dwarf rabbit'
    ),
    gallery: [],
    location: 'Vranje, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: false,
    status: 'available',
  }),

  new Pet({
    id: 'pet_thumper',
    name: 'Thumper',
    description: 'Curious Rex rabbit; enjoys tunnels and gentle playtime.',
    ageYears: 3,
    category: 'rabbit',
    breed: 'Rex',
    sex: 'male',
    size: 'small',
    weightKg: 2.3,
    image: img(
      'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=1600&auto=format&fit=crop',
      'Thumper the rex rabbit'
    ),
    gallery: [],
    location: 'Pirot, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: false,
    status: 'pending',
  }),

  new Pet({
    id: 'pet_hazel',
    name: 'Hazel',
    description:
      'Calm mini lop with a sweet nature; suitable for first-time rabbit owners.',
    ageYears: 1,
    category: 'rabbit',
    breed: 'Mini Lop',
    sex: 'female',
    size: 'small',
    weightKg: 1.8,
    image: img(
      'https://images.unsplash.com/photo-1548550052-2650b7d8591b?q=80&w=1600&auto=format&fit=crop',
      'Hazel the mini lop'
    ),
    gallery: [],
    location: 'Kragujevac, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: false,
    microchipped: false,
    status: 'available',
  }),

  new Pet({
    id: 'pet_mochi',
    name: 'Mochi',
    description:
      'Spirited Holland lop; enjoys fresh herbs and cardboard chew toys.',
    ageYears: 2,
    category: 'rabbit',
    breed: 'Holland Lop',
    sex: 'female',
    size: 'small',
    weightKg: 2,
    image: img(
      'https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1600&auto=format&fit=crop',
      'Mochi the Holland lop'
    ),
    gallery: [],
    location: 'Novi Sad, RS',
    goodWith: { children: true, dogs: false, cats: true },
    vaccinated: true,
    neutered: true,
    microchipped: false,
    status: 'available',
  }),

  new Pet({
    id: 'pet_kiwi',
    name: 'Kiwi',
    description:
      'Cheerful budgie who enjoys chirping along to music. Looking for a patient owner.',
    ageYears: 1,
    category: 'bird',
    breed: 'Budgerigar',
    sex: 'male',
    size: 'small',
    weightKg: 0.04,
    image: img(
      'https://images.unsplash.com/photo-1498534928137-473daa67f5c4?q=80&w=1600&auto=format&fit=crop',
      'Kiwi the budgie'
    ),
    gallery: [],
    location: 'Belgrade, RS',
    goodWith: { children: true, dogs: false, cats: false },
    vaccinated: false,
    neutered: false,
    microchipped: false,
    status: 'available',
  }),

  new Pet({
    id: 'pet_sunny',
    name: 'Sunny',
    description:
      'Friendly cockatiel who whistles simple tunes and enjoys shoulder time.',
    ageYears: 2,
    category: 'bird',
    breed: 'Cockatiel',
    sex: 'female',
    size: 'small',
    weightKg: 0.09,
    image: img(
      'https://images.unsplash.com/photo-1546447145-8c4fc5b4f841?q=80&w=1600&auto=format&fit=crop',
      'Sunny the cockatiel'
    ),
    gallery: [],
    location: 'Niš, RS',
    goodWith: { children: true, dogs: false, cats: false },
    vaccinated: false,
    neutered: false,
    microchipped: false,
    status: 'available',
  }),

  new Pet({
    id: 'pet_pico',
    name: 'Pico',
    description:
      'Green-cheeked conure; social and playful, needs daily interaction.',
    ageYears: 3,
    category: 'bird',
    breed: 'Conure',
    sex: 'male',
    size: 'small',
    weightKg: 0.07,
    image: img(
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      'Pico the conure'
    ),
    gallery: [],
    location: 'Novi Sad, RS',
    goodWith: { children: true, dogs: false, cats: false },
    vaccinated: false,
    neutered: false,
    microchipped: false,
    status: 'pending',
  }),

  new Pet({
    id: 'pet_skye',
    name: 'Skye',
    description:
      'Blue budgie; gentle and curious, enjoys mirror toys and millet treats.',
    ageYears: 1,
    category: 'bird',
    breed: 'Budgerigar',
    sex: 'female',
    size: 'small',
    weightKg: 0.04,
    image: img(
      'https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1600&auto=format&fit=crop',
      'Skye the budgie'
    ),
    gallery: [],
    location: 'Kraljevo, RS',
    goodWith: { children: true, dogs: false, cats: false },
    vaccinated: false,
    neutered: false,
    microchipped: false,
    status: 'available',
  }),

  new Pet({
    id: 'pet_blue',
    name: 'Blue',
    description:
      'Talkative ringneck parakeet; smart and trainable with patience.',
    ageYears: 4,
    category: 'bird',
    breed: 'Indian Ringneck',
    sex: 'male',
    size: 'small',
    weightKg: 0.12,
    image: img(
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop',
      'Blue the ringneck parakeet'
    ),
    gallery: [],
    location: 'Belgrade, RS',
    goodWith: { children: true, dogs: false, cats: false },
    vaccinated: false,
    neutered: false,
    microchipped: false,
    status: 'available',
  }),
];

export const PETS_BY_ID = new Map(PETS.map((p) => [p.id, p]));

export function getPetById(id: string): Pet | null {
  return PETS_BY_ID.get(id) ?? null;
}

export function searchPets(query: string): Pet[] {
  const q = query.trim().toLowerCase();
  if (!q) return PETS;
  return PETS.filter((p) => p.matchesQuery(q));
}