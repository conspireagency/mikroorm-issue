import { Options, UnderscoreNamingStrategy } from "@mikro-orm/core";
import { Shop, Session } from "../entities/Auth.entity";
import { Migrator } from "@mikro-orm/migrations";
import { MySqlDriver } from "@mikro-orm/mysql";
import {
  Wishlist,
  WishlistGroup,
  WishlistProductVariant,
} from "@/entities/Wishlist.entity";

const config: Options = {
  driver: MySqlDriver,
  namingStrategy: UnderscoreNamingStrategy,
  clientUrl: process.env.DATABASE_URL,
  entities: [Shop, Session, Wishlist, WishlistGroup, WishlistProductVariant],
  debug: true,
  extensions: [Migrator],
  migrations: {
    transactional: true,
    allOrNothing: true, // run all migrations in current batch in master transaction
  },
  schemaGenerator: {
    disableForeignKeys: true, // try to disable foreign_key_checks (or equivalent)
    createForeignKeyConstraints: false, // do not generate FK constraints
  },
  driverOptions: {
    connection: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};

export default config;
