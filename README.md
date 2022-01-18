# Nestjs Mongoose Generic Repository


```bash
$ npm i nestjs-mongoose-generic-repository
```

## Usage

```bash
├── cats
        ├── controller.ts
        ├── entity.ts
        ├── module.ts
        ├── repository.ts
        ├── schema.ts
```

```ts
--repository.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'nestjs-mongoose-generic-repository';

import { CatDocument, Cats } from './schema';

@Injectable()
export class CatsRepository extends Repository<CatDocument> {
  constructor(@InjectModel(Cats.name) private entity: Model<CatDocument>) {
    super(entity);
  }
}
```

```ts
--controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { CreatedModel } from 'nestjs-mongoose-generic-repository';

import { CatsDTO } from './entity';
import { CatsRepository } from './repository';

@Controller('cats')
export class CatsController {
  constructor(private readonly catRepository: CatsRepository) {}

  @Post()
  async save(@Body() model: CatsDTO): Promise<CreatedModel> {
    const saved = await this.catRepository.create(model);
    return saved;
  }
}
```

---
### Operators

```bash
  create
  find
  findById
  findAll
  remove
  updateOne
  updateMany
```
#### Lib types
```ts

import { ObjectId } from 'mongoose';

export type UpdatedModel = {
  matchedCount: number;
  modifiedCount: number;
  acknowledged: boolean;
  upsertedId: unknown | ObjectId;
  upsertedCount: number;
};

export type RemovedModel = {
  deletedCount: number;
  deleted: boolean;
};

export type CreatedModel = {
  id: string;
  created: boolean;
};

```
---

The following is a list of all the people that have contributed to 
nestjs-mongoose-generic-repository. Thanks for your contributions!

[<img alt="mikemajesty" src="https://avatars1.githubusercontent.com/u/11630212?s=460&v=4&s=117" width="117">](https://github.com/mikemajesty)

## License

It is available under the MIT license.
[License](https://opensource.org/licenses/mit-license.php)
