import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, FindConditions } from 'typeorm';
import { EventService } from '../event/event.service';
import { Company } from './company.entity';
import { ICompany, ICreateCompany } from './company.interface';


@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) { }

  findOne(query: FindConditions<Company>): Promise<Company> {
    return this.companyRepository.findOne(query);
  }

  async createCompany(company: ICreateCompany): Promise<InsertResult> {
    try {
      const companyEntity = this.companyRepository.create(company);

      const res = await this.companyRepository.insert(companyEntity);

      Logger.log('createCompany - Created company');

      return res;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
}