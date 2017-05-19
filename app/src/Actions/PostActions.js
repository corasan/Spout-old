import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCEEDED,
  CREATE_POST_MODAL_VISIBLE,
} from '../Util/types'

export const createPost = (payload: Object) => ({
  type: CREATE_POST_REQUEST,
  payload,
})

export const postModalVisible = (payload: boolean) => ({
  type: CREATE_POST_MODAL_VISIBLE,
  payload,
})

// export const postModalVisible = (payload: boolean) => {
//   return (dispatch) => {
//     Actions.createPost()
//     dispatchOpenCreatePost(dispatch, parseInt)
//   }
// }

// export const createPostSucceeded = (payload) => {
//   return {
//     type: CREATE_POST_SUCCEEDED,
//     payload,
//   }
// }
