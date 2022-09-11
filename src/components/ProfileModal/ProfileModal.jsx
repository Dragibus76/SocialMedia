import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened = {modalOpened}
      onClose={() => setModalOpened(false)}
    >
      {/* Modal content */}
      <form className="infoForm">
        <h3>Vos Informations</h3>
        <div>
            <input type="text" className='infoInput' name='FirstName' placeholder='Prénom' />
            <input type="text" className='infoInput' name='LasttName' placeholder='Nom' />
        </div>

        <div>
            <input type="text" className='infoInput' name='WorkAt' placeholder='Travail' />
        </div>

        <div>
            <input type="text" className='infoInput' name='LIves in' placeholder='Ville' />
            <input type="text" className='infoInput' name='Country' placeholder='Pays' />
        </div>

        <div>
            <input type="text" className='infoInput' placeholder='Situation Amoureuse' />
        </div>

        <div>
            Photo de profil
            <input type="file" name='profilImg' />
            Photo de couverture
            <input type="file" name='coverImg'/>
        </div>

        <button className="button infoButton">Mise a jour</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;