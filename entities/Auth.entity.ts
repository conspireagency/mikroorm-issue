import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Shop {
  @PrimaryKey()
  shop!: string;

  @Property({ default: false })
  is_active: boolean = false;
}

@Entity()
export class Session {
  @PrimaryKey()
  id!: string;

  @Property({ length: 3000 })
  content: string = "";

  @ManyToOne()
  shop!: Shop;

  @Property()
  created_at = new Date();

  @Property({ onUpdate: () => new Date() })
  updated_at = new Date();
}
