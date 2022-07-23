import { IEmailTemplates } from './IEmailTemplates';

export interface ISendEmailConfig<T = any> {
  subject: string;
  to: string;
  template: IEmailTemplates;
  locale: string;
  data?: T;
}
