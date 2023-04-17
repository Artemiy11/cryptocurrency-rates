import { useRouter } from "next/router";

const Profile = () => {
    const router = useRouter();
    const {username} = router.query;

    return (
        <h1>Hello, {username}!</h1>
    )
}

export default Profile;
