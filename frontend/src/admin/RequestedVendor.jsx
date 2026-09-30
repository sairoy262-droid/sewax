import React, { useState } from "react";
import {
  Loader2,
  AlertCircle,
  UserRound,
  Phone,
  Mail,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";
import { useGetUserQuery } from "../redux/feature/user";
import ModalOpen from "./Modal";

const RequestedVendor = () => {
  const { data: getUser, isLoading, isError, error } = useGetUserQuery();
  const [selectedUser, setSelectedUser] = useState(null);
  const users = Array.isArray(getUser)
    ? getUser.filter((user) => user.role === "user")
    : [];
  const handleRoleClick = (user) => {
    setSelectedUser(user);
  };
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F]">
        {" "}
        <div className="flex items-center gap-3 text-[#F5C542]">
          {" "}
          <Loader2 className="animate-spin" size={28} />{" "}
          <span className="text-lg"> Loading users... </span>{" "}
        </div>{" "}
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-6">
        {" "}
        <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
          {" "}
          <AlertCircle className="mx-auto mb-4 text-red-400" size={40} />{" "}
          <h2 className="text-xl font-semibold text-white">
            {" "}
            Unable to load users{" "}
          </h2>{" "}
          <p className="mt-2 text-sm text-gray-400">
            {" "}
            {error?.data?.message || "Something went wrong"}{" "}
          </p>{" "}
        </div>{" "}
      </div>
    );
  }
  return (
    <>
      {" "}
      <div className="min-h-screen bg-[#0B0B0F] px-6 py-12">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          {/* HEADER */}{" "}
          <div className="mb-10">
            {" "}
            <div className="mb-3 flex items-center gap-3">
              {" "}
              <div className="h-px w-10 bg-[#F5C542]" />{" "}
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5C542]">
                {" "}
                SEWAX USERS{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              {" "}
              <div>
                {" "}
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {" "}
                  Requested{" "}
                  <span className="text-[#F5C542]"> vendors </span>{" "}
                </h1>{" "}
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                  {" "}
                  Click a user's role to register that user as a vendor.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex items-center gap-3 rounded-2xl border border-[#F5C542]/20 bg-[#111116] px-5 py-4">
                {" "}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C542]/10">
                  {" "}
                  <BriefcaseBusiness
                    size={20}
                    className="text-[#F5C542]"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {" "}
                    User Requests{" "}
                  </p>{" "}
                  <p className="text-xl font-bold text-white">
                    {" "}
                    {users.length}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* EMPTY */}{" "}
          {users.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-14 text-center">
              {" "}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5C542]/10">
                {" "}
                <UserRound size={30} className="text-[#F5C542]" />{" "}
              </div>{" "}
              <h2 className="text-2xl font-semibold text-white">
                {" "}
                No user requests found{" "}
              </h2>{" "}
              <p className="mx-auto mt-3 max-w-md text-gray-400">
                {" "}
                There are currently no users waiting to become vendors.{" "}
              </p>{" "}
            </div>
          ) : (
            /* TABLE */ <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111116] shadow-2xl shadow-black/20">
              {" "}
              <div className="border-b border-white/10 bg-[#0B0B0F] px-6 py-5">
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5C542]/10">
                    {" "}
                    <BriefcaseBusiness
                      size={20}
                      className="text-[#F5C542]"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h2 className="font-bold text-white">
                      {" "}
                      User Requests{" "}
                    </h2>{" "}
                    <p className="text-xs text-gray-500">
                      {" "}
                      Click the role to register as vendor{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="overflow-x-auto">
                {" "}
                <table className="w-full min-w-[900px]">
                  {" "}
                  <thead>
                    {" "}
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      {" "}
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {" "}
                        User{" "}
                      </th>{" "}
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {" "}
                        Email{" "}
                      </th>{" "}
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {" "}
                        Phone{" "}
                      </th>{" "}
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {" "}
                        Address{" "}
                      </th>{" "}
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {" "}
                        Role{" "}
                      </th>{" "}
                    </tr>{" "}
                  </thead>{" "}
                  <tbody>
                    {" "}
                    {users.map((user) => (
                      <tr
                        key={user.id}
                        className="group border-b border-white/5 transition hover:bg-white/[0.03]"
                      >
                        {" "}
                        {/* USER */}{" "}
                        <td className="px-6 py-5">
                          {" "}
                          <div className="flex items-center gap-3">
                            {" "}
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5C542]/10">
                              {" "}
                              <UserRound
                                size={19}
                                className="text-[#F5C542]"
                              />{" "}
                            </div>{" "}
                            <div>
                              {" "}
                              <p className="font-semibold text-white transition group-hover:text-[#F5C542]">
                                {" "}
                                {user.username}{" "}
                              </p>{" "}
                              <p className="text-xs text-gray-500">
                                {" "}
                                ID: #{user.id}{" "}
                              </p>{" "}
                            </div>{" "}
                          </div>{" "}
                        </td>{" "}
                        {/* EMAIL */}{" "}
                        <td className="px-6 py-5">
                          {" "}
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            {" "}
                            <Mail size={16} className="text-[#F5C542]" />{" "}
                            <span> {user.email || "N/A"} </span>{" "}
                          </div>{" "}
                        </td>{" "}
                        {/* PHONE */}{" "}
                        <td className="px-6 py-5">
                          {" "}
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            {" "}
                            <Phone size={16} className="text-[#F5C542]" />{" "}
                            <span>
                              {" "}
                              {user.phone || user.phone_no || "N/A"}{" "}
                            </span>{" "}
                          </div>{" "}
                        </td>{" "}
                        {/* ADDRESS */}{" "}
                        <td className="px-6 py-5">
                          {" "}
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            {" "}
                            <MapPin size={16} className="text-[#F5C542]" />{" "}
                            <span> {user.address || "N/A"} </span>{" "}
                          </div>{" "}
                        </td>{" "}
                        {/* ROLE */}{" "}
                        <td className="px-6 py-5">
                          {" "}
                          <button
                            onClick={() => handleRoleClick(user)}
                            className="inline-flex cursor-pointer items-center rounded-full border border-[#F5C542]/30 bg-[#F5C542]/10 px-3 py-1.5 text-xs font-semibold capitalize text-[#F5C542] transition hover:border-[#F5C542] hover:bg-[#F5C542] hover:text-black"
                          >
                            {" "}
                            {user.role}{" "}
                          </button>{" "}
                        </td>{" "}
                      </tr>
                    ))}{" "}
                  </tbody>{" "}
                </table>{" "}
              </div>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
      {/* MODAL */}{" "}
      {selectedUser && (
        <ModalOpen user={selectedUser} onClose={()=> setSelectedUser(null)} />
      )}{" "}
    </>
  );
};
export default RequestedVendor;
