import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent
            mx="auto"
            w="auto"
            h="auto"
            maxW={"900px"}
            maxH={"600px"}
          >
            <ModalBody p={0}>
              <Image 
                src={imgUrl} 
                maxW={"900px"}
                maxH={"600px"}  
              />
            </ModalBody>

            <ModalFooter
              h={"2rem"}
              bgColor={"#353431"}
              borderBottomRadius={'5px'}
            >
              <Link
                isExternal={true}
                href={imgUrl}
                mr="auto"
                color={"#F3F2F2"}
                fontSize={"sm"}
                lineHeight={"md"}
              >
                Abrir original
              </Link>
            </ModalFooter>
          </ModalContent>
      </Modal>
    </>
  )
}
