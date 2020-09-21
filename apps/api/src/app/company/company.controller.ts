import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ICompany, ICreateCompany } from './company.interface';

@Controller('companies')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService
  ) { }

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.companyService.findOne({ id });
  }
  
  @Post()
  async create(@Body() company: ICreateCompany): Promise<ICompany> {
    try {
      const results = await this.companyService.createCompany(company);
      return results.raw
    } catch (error) {
    }
  }

}