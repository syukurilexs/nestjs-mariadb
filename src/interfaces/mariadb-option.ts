export interface MariadbModuleOption {
     host: string;
     user: string;
     password: string;
     connectionLimit: number;
     port?: number;
     connectTimeout?: number;
}