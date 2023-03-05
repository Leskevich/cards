export const errorResponse = (e: any) => {
    const error = e.response
        ? e.response.data.error
        : (e.message + ', more details in the console')
    alert(error)
}