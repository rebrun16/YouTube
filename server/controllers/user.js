import { createError } from "../error";

export const update = async (req, res, next) => {
  if(req.params.id === req.user.id) {
    try{
      const updatedUser = await User
    }catch(err){
      next(err)
    }
  }else{
    return next(createError(403, "You can update only your account"))
  }
};

export const deleteUser = async (req, res, next) => {

};

export const getUser = async (req, res, next) => {

};

export const subscribe = async (req, res, next) => {

};

export const unsubscribe = async (req, res, next) => {
  
};

export const like = async (req, res, next) => {
  
};

export const dislike = async (req, res, next) => {
  
};