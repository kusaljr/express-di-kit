// This file is auto-generated by the injection watcher. Do not modify manually.
// It registers all @Injectable and @Socket classes with the DI container.
// Generated on: 2025-05-23T09:39:28.063Z

import { ProductController } from '../../src/product/product.controller';
import { ProductService } from '../../src/product/product.service';
import { UserController } from '../../src/users/user.controller';
import { UserService } from '../../src/users/users.service';

import { Container } from './container';

const container = Container.getInstance();

container.register(ProductService);
container.register(ProductController);
container.register(UserService);
container.register(UserController);

export const productService = container.resolve(ProductService);
export const productController = container.resolve(ProductController);
export const userService = container.resolve(UserService);
export const userController = container.resolve(UserController);
