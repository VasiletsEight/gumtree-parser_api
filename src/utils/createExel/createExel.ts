import {Workbook} from "excel4node";
import {UserData} from "features/parser/type";

const createExel = async (fields: UserData[]): Promise<Buffer> => {
    const wb = new Workbook();
    const ws = wb.addWorksheet('Sheet 1');

    fields.forEach(({name, phone}: UserData, index: number) => {
        ws.cell(index + 1, 1).string(name);
        ws.cell(index + 1, 2).string(phone);
    })

    return await wb.writeToBuffer();
}

export default createExel;