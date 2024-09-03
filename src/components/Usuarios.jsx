import useFetch from "../hooks/useFetch"

export default function Usuarios() {

    const { data, error } = useFetch('https://jsonplaceholder.typicode.com/users')

    if (error) {
        return (<p>{error.message}</p>)
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">User name</th>
                    <th scope="col">WebSite</th>
                </tr>
            </thead>
            <tbody>

                {data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}
