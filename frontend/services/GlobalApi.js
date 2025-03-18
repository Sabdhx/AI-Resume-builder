const onCreate = async () => {
  try {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title,
        ResumeId: uuid,
        UserEmail: user?.primaryEmailAddress?.emailAddress,
        UserName: user?.fullName,
      },
    };

    const response = await axiosClient.post("/user-resumes", data);
    console.log("Success:", response.data);

    if (response.data) {
      setOpen(false);
      navigate(`/Dashboard/resume/${response.data.data.id}/edit`);
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  } finally {
    setLoading(false);
  }
};
