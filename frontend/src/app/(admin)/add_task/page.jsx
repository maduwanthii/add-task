'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { Button, Col, Form, FormControl, Row, Card } from 'react-bootstrap'
import ComponentContainerCard from '@/components/ComponentContainerCard'
import { Icon } from '@iconify/react'

const schema = yup.object({
  firstName: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
})

const AddUser = () => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const fetchTasks = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:5000/tasks')
      if (response.ok) {
        const data = await response.json()
        setTasks(data)
      } else {
        Swal.fire('Error', 'Failed to load tasks', 'error')
      }
    } catch {
      Swal.fire('Error', 'Server error', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.firstName,
          description: data.description,
        }),
      })

      if (response.ok) {
        Swal.fire('Success', 'Task added successfully!', 'success')
        const result = await response.json()
        setTasks((prev) => [...prev, { id: result.taskId, title: data.firstName, description: data.description, is_completed: 'NO' }])
      } else {
        const err = await response.json()
        Swal.fire('Error', err.message || 'Something went wrong', 'error')
      }
    } catch {
      Swal.fire('Error', 'Failed to connect to server', 'error')
    }
  }

  const handleComplete = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${taskId}/complete`, { method: 'PUT' })
      if (response.ok) {
        Swal.fire('Success', `Task ${taskId} marked as done!`, 'success')
        setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, is_completed: 'YES' } : task)))
      } else {
        Swal.fire('Error', 'Could not mark task as complete', 'error')
      }
    } catch {
      Swal.fire('Error', 'Failed to connect to server', 'error')
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        
        <Col lg={5}>
          <ComponentContainerCard title="Add a Task">
            <Row className="mb-3">
              <Col sm="9">
                <FormControl type="text" {...register('firstName')} placeholder="Title" />
                <p className="text-danger">{errors.firstName?.message}</p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm="9">
                <Form.Control as="textarea" rows={4} {...register('description')} placeholder="Description" />
                <p className="text-danger">{errors.description?.message}</p>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm="9">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Adding...' : 'Add Task'}
                </Button>
              </Col>
            </Row>
          </ComponentContainerCard>
        </Col>

        
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              height: '100%',
              width: '1px',
              backgroundColor: '#ddd',
              margin: '0 20px',
            }}
          />
        </Col>

       
        <Col lg={6}>
          <Row>
            {tasks.map((task) => (
              <Col md={12} key={task.id} className="mb-4">
                <Card className="shadow-sm border-0">
                  <Card.Body className="pt-4 pb-4 px-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex flex-column">
                        <span className="text-muted fw-semibold mb-2 d-block">#{task.id}</span>
                        <h5 className="fw-bold mb-2">{task.title}</h5>
                        <p className="text-muted">{task.description}</p>
                      </div>
                    </div>

                   
                    <div className="d-flex justify-content-end align-items-center">
                      <Button
                        className="d-flex align-items-center"
                        disabled={task.is_completed === 'YES'}
                        style={{
                          padding: '0.3rem 0.6rem',
                          fontSize: '0.75rem',
                          borderRadius: '15px',
                          backgroundColor: '#0c4219ff',
                          borderColor: '#0c4219ff',
                          color: '#fff',
                        }}
                        onClick={() => handleComplete(task.id)}>
                        <Icon icon="mdi:check" width={15} height={20} style={{ marginRight: '4px' }} />
                        <span>{task.is_completed === 'YES' ? 'Done' : 'Mark as Done'}</span>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default AddUser

