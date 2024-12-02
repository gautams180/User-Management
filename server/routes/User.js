import express from 'express'

const router = express.Router();

import {
    getUser,
    getAllUsers,
    deleteUser,
    updateUserDetails,
} from '../controllers/User.js'

router.get("/getUser", getUser);
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser", deleteUser);
router.put("/updateUser", updateUserDetails);

export default router;