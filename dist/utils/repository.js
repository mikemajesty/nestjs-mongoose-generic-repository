"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(model) {
        this.model = model;
    }
    create(doc, saveOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdEntity = new this.model(doc);
            const savedResult = yield createdEntity.save(saveOptions);
            return { id: savedResult.id, created: !!savedResult.id };
        });
    }
    find(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find(filter, null, options);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find();
        });
    }
    remove(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const { deletedCount } = yield this.model.remove(filter);
            return { deletedCount, deleted: !!deletedCount };
        });
    }
    updateOne(filter, updated, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.updateOne(filter, updated, options);
        });
    }
    updateMany(filter, updated, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.updateMany(filter, updated, options);
        });
    }
}
exports.Repository = Repository;
