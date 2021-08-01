import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DetalleCarrito } from '../models';
import { DetalleCarritoRepository } from '../repositories';
export declare class DetalleCarritoController {
    detalleCarritoRepository: DetalleCarritoRepository;
    constructor(detalleCarritoRepository: DetalleCarritoRepository);
    create(detalleCarrito: DetalleCarrito): Promise<DetalleCarrito>;
    count(where?: Where<DetalleCarrito>): Promise<Count>;
    find(filter?: Filter<DetalleCarrito>): Promise<DetalleCarrito[]>;
    updateAll(detalleCarrito: DetalleCarrito, where?: Where<DetalleCarrito>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<DetalleCarrito>): Promise<DetalleCarrito>;
    updateById(id: number, detalleCarrito: DetalleCarrito): Promise<void>;
    replaceById(id: number, detalleCarrito: DetalleCarrito): Promise<void>;
    deleteById(id: number): Promise<void>;
}
