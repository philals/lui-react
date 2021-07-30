// src/mocks/handlers.js
import {rest} from "msw";

export const handlers = [
    rest.get("/auth/api/userinfo", (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json(
                    {
                        "user": {
                            "id": "cpa",
                            "idHash": "1_testRegisteredUser_2",
                            "email": "testReg@linz.govt.nz",
                            "givenNames": "Max",
                            "surname": "Doesburg",
                            "loginType": "EXTERNAL",
                            "preferredName": "Max",
                            "firms": [{
                                "name": "FirmL",
                                "id": "firml",
                                "privileges": ["prv_sign_tin"]
                            }, {"name": "Cheese Inc", "id": "cheese-inc", "privileges": []}, {
                                "name": "Apple Inc",
                                "id": "apple-inc",
                                "privileges": []
                            }],
                            "passwordChangeRequired": false,
                            "roles": ["TTLS"]
                        }
                    }
                )
            );
        }
    )
]

