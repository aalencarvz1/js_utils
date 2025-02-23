export default class Utils {
    static getMomento(): Date;
    static log(...values: any[]): void;
    static logi(p_nome_classe: any, p_nome_funcao: any): void;
    static logf(p_nome_classe: any, p_nome_funcao: any): void;
    static loge(...values: any[]): void;
    static logError(error: any): void;
    static typeOf(value: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    static isArray(obj: any): boolean;
    /**
     *
     * @param {any} pValue
     * @returns {boolean}
     */
    static hasValue(pValue: any): boolean;
    static isNotNull(obj: any): boolean;
    static firstValid(arr_valores: any, check_null?: boolean): any;
    static toBool(pValue: any): boolean;
    static getDeepProperty(obj: any, arrayOfDeepProps: any): any;
    static getKey(obj: any, key: any): string;
    static toNumber(v: any): any;
    static deleteNotExistsProperty(object: any, properties: any): void;
    static arrayToObject(array: any, key?: any): {};
    static toBRDate(pDate?: any): string;
    static getPreviousYearDate(pDate: any): Date;
    static getPreviousYearLastMonthDate(pDate: any): Date;
    static toArray(value: any, delimiter: any): any;
    static singleArrayTo2LevelArray(array: any): any[];
    static getSingleUrlPath(urlPath: any): any;
    /**
     *
     * @param {*} obj
     * @param {*} methodName
     * @returns string | null
     * @created 2024-07-13
     * @version 1.0.1
     */
    static getMethodName(obj: any, methodName: any): any;
    static toDate(pValue: any, pFormat: any): any;
    static isClass(func: any): any;
    /**
     * Retorna todas as propriedades e métodos, incluindo as herdadas.
     * @param obj Objeto ou protótipo a ser analisado.
     * @returns Lista de nomes de propriedades e métodos.
     */
    static getAllProperties(obj: any): any[];
}
