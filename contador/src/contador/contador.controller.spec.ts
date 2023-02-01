import { Test, TestingModule } from '@nestjs/testing';
import { ContadorController } from './contador.controller';

describe('ContadorController', () => {
  let controller: ContadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContadorController],
    }).compile();

    controller = module.get<ContadorController>(ContadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
