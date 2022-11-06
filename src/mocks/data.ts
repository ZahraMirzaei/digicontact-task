import { IServerResponse } from "../api/responseInterfaces";

export const contactsList = [
  {
    name: {
      title: "Mr",
      first: "Ron",
      last: "Adam",
    },
    location: {
      street: {
        number: 7421,
        name: "Hillcrest Rd",
      },
      city: "Miramar",
      state: "Colorado",
      country: "United States",
      postcode: 84542,
      coordinates: {
        latitude: "31.5154",
        longitude: "-50.4893",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "ron.adam@example.com",
    login: {
      uuid: "d86b591d-58fd-4d20-bb3c-7fa358cc57f9",
      username: "brownrabbit502",
      password: "playtimes",
      salt: "vG7Y1id9",
      md5: "58b540dea9474b762c03657526944ba7",
      sha1: "5de8057cba2a9601931d041f874cd001aeaa76bc",
      sha256:
        "940e3cad8561936b0df62f94f28dd07f6f1ee126b2ee04f7007622d5f669eed1",
    },
    phone: "(457) 834-9674",
    id: {
      name: "SSN",
      value: "671-34-0611",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/24.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Ron",
      last: "Martinez",
    },
    location: {
      street: {
        number: 7461,
        name: "Hillcrest Rd",
      },
      city: "Miramar",
      state: "Colorado",
      country: "United States",
      postcode: 84542,
      coordinates: {
        latitude: "31.5154",
        longitude: "-50.4893",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "ron.martinez@example.com",
    login: {
      uuid: "d86b591d-58fd-4d20-bb3c-7fa358cc57f9",
      username: "brownrabbit502",
      password: "playtime",
      salt: "vG7Y1id9",
      md5: "58b540dea9474b762c03657526944ba7",
      sha1: "5de8057cba2a9601931d041f874cd001aeaa76bc",
      sha256:
        "940e3cad8561936b0df62f94f28dd07f6f1ee126b2ee04f7007622d5f669eed1",
    },
    phone: "(457) 834-9674",
    id: {
      name: "SSN",
      value: "671-34-0319",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/24.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "John",
      last: "Harper",
    },
    location: {
      street: {
        number: 7354,
        name: "Smokey Ln",
      },
      city: "Visalia",
      state: "Arizona",
      country: "United States",
      postcode: 71553,
      coordinates: {
        latitude: "42.5329",
        longitude: "-35.4366",
      },
      timezone: {
        offset: "-1:00",
        description: "Azores, Cape Verde Islands",
      },
    },
    email: "john.harper@example.com",
    login: {
      uuid: "c2274c45-079c-4256-942f-f4856bcf0af5",
      username: "yellowwolf118",
      password: "jjjj",
      salt: "7whzxCZ1",
      md5: "e56324a48cc4b5c307387d5e1f630c72",
      sha1: "e5fb8b54b9b8328c95707c737d2941d6bf7b2f8a",
      sha256:
        "3f40e79f9389c6ce4eeba80bca9ebd5c665541f9dad997e4df80e436d1cf5ad1",
    },
    phone: "(556) 402-8781",
    id: {
      name: "SSN",
      value: "076-69-6207",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
    },
  },
  {
    name: {
      title: "Miss",
      first: "April",
      last: "Moore",
    },
    location: {
      street: {
        number: 8634,
        name: "Mockingbird Ln",
      },
      city: "Baton Rouge",
      state: "West Virginia",
      country: "United States",
      postcode: 42612,
      coordinates: {
        latitude: "-67.7843",
        longitude: "-30.6620",
      },
      timezone: {
        offset: "-3:00",
        description: "Brazil, Buenos Aires, Georgetown",
      },
    },
    email: "april.moore@example.com",
    login: {
      uuid: "67dd7fe0-a687-48a4-84dc-d385a053f8ec",
      username: "blackleopard811",
      password: "glock",
      salt: "FvaKNy3G",
      md5: "aa904b05d1fb5e1dbf2d12ee95f87378",
      sha1: "133855687be86a86f4af05c6adcbd3d863a0d4e2",
      sha256:
        "f816cc97d2ae8a5111b94c68193348a6b2e86d02f0316f14198b067f04d04a3b",
    },
    phone: "(699) 880-6084",
    id: {
      name: "SSN",
      value: "785-96-4450",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/96.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/96.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
    },
  },
];

export const response: IServerResponse = {
  results: contactsList,
  info: {
    seed: "f5f4a0a7deb01a0a",
    results: 2,
    page: 1,
    version: "1.4",
  },
};
