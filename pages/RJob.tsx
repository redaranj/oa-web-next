const RJob = () => <div />;

export default RJob;

export const getStaticProps = async () => ({
  redirect: {
    destination: "/jobs/decentralized-storage-researcher",
  },
});
