export default {
  handle (success, fail = (message) => { console.log(message) }) {
    console.log(success, fail)
    return (res) => {
      // switch (res.data.header.code) {
      //   case 200: {
      //     success(res.data.body)
      //     break
      //   }
      //   default: fail(res.data.header.message)
      // }
      switch (res.status) {
        case 200: {
          success(res.data)
          break
        }
        default: fail(res.data)
      }
    }
  }
}
