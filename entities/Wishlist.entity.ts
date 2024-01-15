import {
  Collection,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Shop } from "./Auth.entity";

@Entity()
export class Wishlist {
  @PrimaryKey()
  id!: number;

  @Property()
  customer_email!: string;

  @Property()
  name!: string;

  @ManyToOne()
  shop!: Shop;
}

@Entity()
export class WishlistGroup {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @ManyToOne()
  wishlist!: Wishlist;

  @ManyToMany(() => WishlistProductVariant, "groups", { owner: true })
  wishlist_product_variants = new Collection<WishlistProductVariant>(this);
}

@Entity()
export class WishlistProductVariant {
  @PrimaryKey()
  id!: number;

  @Property()
  product_id!: number;

  @Property()
  variant_id!: number;

  // a product variant combination can be added to any number of wishlists
  // however within a wishlist a product variant combination can only be added once
  @ManyToOne()
  wishlist!: Wishlist;

  @ManyToMany(() => WishlistGroup, (group) => group.wishlist_product_variants)
  groups = new Collection<WishlistGroup>(this);
}
