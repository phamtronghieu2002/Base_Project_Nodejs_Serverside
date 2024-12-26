
import { ControllerWrapper } from "~/helper/controller.helper";
import pool from "~/db/db";
import { transformData } from "~/helper/db.helper";
import customerModel from "~/models/customer.model";


export const initHome = ControllerWrapper(async (req, res) => {
    const data = await customerModel.persist({
        email: "test",

    });

    return res.status(200).json({
        data: data
    })
})