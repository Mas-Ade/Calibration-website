// import { Request, response, Response } from "express";
// import { Validator } from "node-input-validator";
// import { queryCustomPgsql } from "../model/query.builder";

// export const login = async (req: Request, res: Response) => {
//     const validator = new Validator(req.body, {
//         username: 'required|string',
//         password: 'required'
//     });

//     await validator.check().then((matched) => {
//         if (!matched) {
//             res.status(422).send(validator.errors);
//             return 0;
//         }

//         let query2 = SELECT * FROM public.tm_staff_std WHERE staff_no = $1 and password = $2;
//         let username2 = req.body.username;
//         let password2 = req.body.password;

//         queryCustomPgsql(query2, [username2, password2], 'dbNmax', (err: any, data: any) => {
//             console.log(data.rows);
//             if (data.rowCount == 0) {
//                 return res.status(500).send({
//                     status: "Error : No Matched!",
//                     code: 500,
//                     message: "Username or password not correct, please check again!",
//                 });
//             }
//             return res.send({
//                 status: "success",
//                 code: 200,
//                 message: "Staff has successfully login!",
//                 data: data.rows,
//             });

//         });
//     });
// };