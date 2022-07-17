import {Workbook} from "excel4node";

const createExel = async (fields: Array<[string, string]>): Promise<Buffer> => {
    const wb = new Workbook();
    const ws = wb.addWorksheet('Sheet 1');

    fields.forEach(([name, phone]: [string, string], index) => {
        ws.cell(index + 1, 1).string(name);
        ws.cell(index + 1, 2).string(phone);
    })

    return await wb.writeToBuffer();
}

export default createExel;