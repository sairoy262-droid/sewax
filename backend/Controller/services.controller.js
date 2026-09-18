import { Createservice, DeleteService, GetService } from "../Services/services.service.js";

export const createservices = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);
    const {name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        message: "please fill all the fields",
      });
    }
    const result = await Createservice(name, description);
    if (!result) {
      return res.status(400).send("Error creating Services");
    }
    res.status(201).json({ message: "Services created succesfully" });
  } catch (error) {
    console.log(error);
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ message: " Services with the same name exist" });
        
    }
  }
  res.status(500).json({ message: " Internal Server Error" });
};
export const GetServices = async (req, res) => {
  try {
    const result = await GetService();
    if (!result) {
      return res.status(404).send("service not found");
    }
    res.status(200).json(result);
  } catch (error) {
    res.send("something went wrong ", error);
  }
};
export const DeletServices = async(req,res) => {
      try {
        const id = Number(req.params.id);
        const result = await DeleteService(id);

        if (result[0].affectedRows === 0) {
          return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json({ message: "Service deleted succesfully" });
      } catch (error) {
        
        res.send("something went wrong ", error);
      }
}
