import { PrismaService } from './prisma.service';

export class BaseService<T, CreateDto, UpdateDto> {
  constructor(private prisma: PrismaService, private model: { name: string }) {}

  async create(data: CreateDto): Promise<T> {
    return this.prisma[this.model.name].create({ data });
  }

  async findAll(): Promise<T[]> {
    return this.prisma[this.model.name].findMany();
  }

  async findOne(id: number): Promise<T | null> {
    return this.prisma[this.model.name].findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateDto): Promise<T> {
    const numericId = parseInt(id, 10); // Convierte la cadena a número entero
    if (isNaN(numericId)) {
      throw new Error('Invalid ID'); // Maneja el caso donde el ID no es un número válido
    }
    return this.prisma[this.model.name].update({
      where: {
        id: numericId
      },
      data: data
    });
  }
  

  async remove(id: number): Promise<T> {
    const numericId = +id; // Convierte la cadena a número entero
  if (isNaN(numericId)) {
    throw new Error('Invalid ID');
  }
  return this.prisma[this.model.name].delete({
    where: {
      id: numericId
    }
  });
  }
}