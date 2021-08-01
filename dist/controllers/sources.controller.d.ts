import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Sources } from '../models';
import { SourcesRepository } from '../repositories';
export declare class SourcesController {
    sourcesRepository: SourcesRepository;
    constructor(sourcesRepository: SourcesRepository);
    create(sources: Sources): Promise<Sources>;
    count(where?: Where<Sources>): Promise<Count>;
    find(filter?: Filter<Sources>): Promise<Sources[]>;
    updateAll(sources: Sources, where?: Where<Sources>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Sources>): Promise<Sources>;
    updateById(id: number, sources: Sources): Promise<void>;
    replaceById(id: number, sources: Sources): Promise<void>;
    deleteById(id: number): Promise<void>;
}
