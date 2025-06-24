interface NotFoundProps{
    message?:string;
}
const NotFound: React.FC<NotFoundProps> = ({message}) => {
  return (
    <div className="text-center text-danger">
        {/* <h1>404</h1>
        <p>Oops! Page not found.</p> */}
        {message || 'Oops! Page not found.'}

    </div>
  )
}

export default NotFound