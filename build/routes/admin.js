"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const cors_1 = __importDefault(require("cors"));
const AdminController_1 = __importDefault(require("../controller/AdminController"));
router.use((0, cors_1.default)());
router.post("/bursar/:booking_id", (req, res) => AdminController_1.default.SendDataToBursar(req, res));
router.delete("/room/:room_id", (req, res) => AdminController_1.default.DeleteRoom(req, res));
router.post("/login", (req, res) => AdminController_1.default.Login(req, res));
router.post("/add_room", (req, res) => AdminController_1.default.AddRoom(req, res));
router.patch("/", (req, res) => AdminController_1.default.AddRoom(req, res));
router.get("/rooms", (req, res) => AdminController_1.default.GetAllRooms(req, res));
router.post("/add_bursar", (req, res) => AdminController_1.default.CreateBursarAccount(req, res));
router.get("/get_bursar", (req, res) => AdminController_1.default.GetBursar(req, res));
router.get("/get_bookings", (req, res) => AdminController_1.default.GetAllBookings(req, res));
router.get("/dashboard", (req, res) => AdminController_1.default.DashboardData(req, res));
module.exports = router;
