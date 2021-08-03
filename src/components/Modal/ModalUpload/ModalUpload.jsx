import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Icon, Button, Dimmer, Loader, Grid, Form } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import { useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import POKEMON_REGISTER from '../../../gql/pokemon/pokemonRegister'
import './ModalUpload.scss'

const initialValues = () => ({
  name: '',
  power: '',
  healthPoints: '',
  pokemonType: '',
  description: ''
})

const ModalUpload = ({ showModal, setShowModal }) => {
  const [fileUpload, setFileUpload] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [check, setCheck] = useState(false)
  const [pokemonRegister] = useMutation(POKEMON_REGISTER)

  const onDrop = useCallback(acceptedFile => {
    setFileUpload({
      type: 'image',
      file: acceptedFile[0],
      preview: URL.createObjectURL(acceptedFile[0])
    })
  })

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop
  })

  const onCloseModal = () => {
    setIsLoading(false)
    setFileUpload(null)
    setShowModal(false)
  }
  const handleOnCheck = () => {
    setCheck(!check)
  }

  const onPublish = async formData => {
    console.log(formData)
    console.log(fileUpload)
    try {
      setIsLoading(true)
      const { data } = await pokemonRegister({
        variables: {
          input: formData,
          file: fileUpload.file
        }
      })
      if (!data.publish.status) {
        toast.warn('Error en la publicación')
        setIsLoading(false)
      } else {
        onCloseModal()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required('Pokemon name is require.'),
      power: Yup.string().required('Pokemon power is required.'),
      healthPoints: Yup.string().required('Pokemon health is require'),
      pokemonType: Yup.string().required('Pokemon type is required'),
      description: Yup.string()
    }),
    onSubmit: async formData => {
      formData.healthPoints = parseInt(formData.healthPoints, 10)
      formData.power = parseInt(formData.power, 10)

      onPublish({ ...formData, public: check })
    }
  })

  return (
    <Modal size="small" open={showModal} onClose={onCloseModal} className="modal-upload">
      <Grid>
        <Grid.Column width={10} className="dropzone-column">
          <div {...getRootProps()} className="dropzone" style={fileUpload && { border: 0 }}>
            {!fileUpload && (
              <>
                <Icon name="cloud upload" />
                <p>Arrastra avatar del pokemon</p>
              </>
            )}
            <input {...getInputProps()} />
          </div>
          {fileUpload?.type === 'image' && (
            <div className="image" style={{ backgroundImage: `url("${fileUpload.preview}")` }} />
          )}
          {isLoading && (
            <Dimmer active className="publishing">
              <Loader />
              <p>Publicando...</p>
            </Dimmer>
          )}
        </Grid.Column>
        <Grid.Column width={6} verticalAlign="middle" className="form-column">
          <Form className="register-form" onSubmit={handleSubmit}>
            <Form.Input
              type="text"
              placeholder="Pokemon Name"
              name="name"
              onChange={handleChange}
              error={errors.name}
            />
            <Form.Input
              type="text"
              placeholder="Power"
              name="power"
              onChange={handleChange}
              error={errors.power}
            />
            <Form.Input
              type="text"
              placeholder="Health Points"
              name="healthPoints"
              onChange={handleChange}
              error={errors.healthPoints}
            />
            <Form.Input
              type="text"
              placeholder="Pokemon Type"
              name="pokemonType"
              onChange={handleChange}
              error={errors.pokemonType}
            />
            <Form.Input
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              error={errors.description}
            />
            <Form.Checkbox
              toggle
              label="Public?"
              name="public"
              checked={check}
              onClick={handleOnCheck}
            />
            {fileUpload && (
              <Button className="btn-submit" type="submit">
                Create
              </Button>
            )}
          </Form>
        </Grid.Column>
      </Grid>
    </Modal>
  )
}

ModalUpload.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired
}

export default ModalUpload
