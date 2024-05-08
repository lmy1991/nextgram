import Modal from './_m/Modal';

export default function Page({ params }: { params: any }) {
  console.log('================', params);
  return <Modal>{params.name}</Modal>;
}
