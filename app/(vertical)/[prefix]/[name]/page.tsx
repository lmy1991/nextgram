import Modal from './_m/Modal';

export default function Page({ params }: { params: { name: string } }) {
  return <Modal>{params.name}</Modal>
}
