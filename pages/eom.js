export const EOM = ({ employee }) => {
return (
    <div className="page-container">
        <div>
            <h1>Employee of month</h1>
        </div>
    </div>
)
}


export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        `https://my-json-server.typicode.com/davitkhanal-ai/Next-news/employeeOfTheMonth`,
    )
}

export default EOM;