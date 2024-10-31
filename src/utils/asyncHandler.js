const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
/* HIGHER ORDER FUNCTION IN JS
const asyncHandler = () => {}
const asyncHandler = () => {() => {}} OR const asyncHandler = () => () => {}
cont asyncHandler = () => async () => {}
 */

// WRAPPER FUNCTION USING TRY CATCH

// const asyncHandler = (fn) => async (err, res, req, next) => {
//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//         success: false,
//         message: err.message
//     });
//   }
// };
