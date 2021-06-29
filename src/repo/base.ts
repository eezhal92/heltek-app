type Entity = {
  id: number;
}

export class EntityNotFoundError extends Error {}

export class BaseRepo<T extends Entity> {
  protected data : T[] = [];

  public setData(data: T[]) {
    this.data = data;
  }

  public find(page = 1, limit = 10) {
    const startIdx = (page * limit) - limit;
    const endIdx = (startIdx + limit);
    const totalPage = Math.ceil(this.data.length / limit);

    const data = this.data.slice(startIdx, endIdx);

    return {
      data,
      totalPage,
      currentPage: page,
      total: this.data.length,
    };
  }

  public remove(id: number) {
    const idx = this.data.findIndex(item => item.id === id);
    if (idx === -1) throw new EntityNotFoundError('Entity not found');

    this.data.splice(idx, 1);
  }

  public getById(id: number) {
    const idx = this.data.findIndex(item => item.id === id);
    if (idx === -1) throw new EntityNotFoundError('Entity not found');

    return this.data[idx];
  }

  public add(data: T) {
    this.data.push(data);
  }
}