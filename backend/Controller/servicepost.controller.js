import {
  DeleteServicePost,
  DeleteServicePostAdmin,
  GetById,
  GetbySlug,
  GetMyPost,
  GetServicePost,
  RegisterServicePost,
  UpdateServicePost,
} from "../Services/servicepost.service.js";
import { generateSlug } from "../Utilities/Generateslug.js";

export const RegisterServicePosts = async (req, res) => {
  const user_id = req.user.id;
  const { title, description, location, budget } = req.body;
  const slug = generateSlug(title);
  if (!(user_id || !title || !description || !location || !budget || !slug)) {
    return res
      .status(400)
      .json({ message: "The fields are not completly field" });
  }
  const result = await RegisterServicePost(
    user_id,
    slug,
    title,
    description,
    location,
    budget,
  );
  if (!result) {
    return res.status(400).json({ message: "error creating service" });
  }

  return res.status(200).json({ message: "Succesfully created" });
};
export const GetServicePosts = async (req, res) => {
  try {
    const result = await GetServicePost();
    if (!result) {
      return res.status(400).json({ message: "error geting the post" });
    }
    return res.status(201).json({ message: "Succesful get post", result });
  } catch (error) {
    res.send("something went wrong ", error);
  }
};
export const GetMyPosts = async (req, res) => {
  try {
    const user_id = req.user.id;
    const result = await GetMyPost(user_id);
    if (!result) {
      return res.status(400).json({ message: "error geting the post" });
    }
    return res.status(201).json({ message: "Succesful get post", result });
  } catch (error) {
    res.send("something went wrong ", error);
  }
};
export const DeleteServicePosts = async (req, res) => {
  try {
    const Id = Number(req.params.Id);
    const user_id = req.user.id;
    const role = req.user.role;

    let result;
    if (!Id) {
      return res.status(400).json({ message: "no id" });
    }
    if (role === "admin") {
      result = await DeleteServicePostAdmin(Id);
      console.log(result);
    } else {
      result = await DeleteServicePost(Id, user_id);
    }
    if (result.affectedRows == 0) {
      return res.status(400).json({
        message: `Post not found of this id=${Id} or user_id=${user_id}`,
      });
    }
    return res.status(200).json({ message: "Succesfully deleted" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "something went wrong",
      error: error,
    });
  }
};
export const UpdateServicePosts = async (req, res) => {
  try {
    const Id = Number(req.params.Id);
    const user_Id = req.user.id;
    const fields = req.body;
    const result = await UpdateServicePost(fields, Id, user_Id);
    if (result[0].affectedRows === 0) {
      return res.status(404).json({
        message: `Product not found of id: ${Id}`,
      });
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.send("something went wrong");
  }
};
 export const GetbySlugs = async(req,res)=>{
 try {
   const { Slug } = req.params;

   const product = await GetbySlug(Slug);
   if (!product) return res.status(400).json({ message: "Product not found" });
   res.status(200).json({ message: product });
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
 }
 export const GetByIds = async(req,res)=>{
  try {
    const Id = Number(req.params.id);
    if(!Id){
       return res.status(400).json({ message: "no id" });
    }
    const result = await GetById(Id);
    if(!result){
      return res.status(400).json({message:"Failed the operation"})
    }
     return res.status(201).json({ message: "Succesful get post", result });
  } catch (error) {
    res.send("something went wrong ", error);
  }
 }
