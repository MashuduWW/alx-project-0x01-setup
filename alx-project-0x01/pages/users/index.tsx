import { UserProps } from "@/interfaces";
import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setPost({ ...newUser, id: users.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users </h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-md text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map(
            (
              {
                name,
                username,
                email,
                phone,
                website,
                id,
                address,
                company,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                key={key}
                name={name}
                username={username}
                email={email}
                phone={phone}
                website={website}
                id={id}
                address={address}
                company={company}
              />
            )
          )}
        </div>
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
}

export default Users;