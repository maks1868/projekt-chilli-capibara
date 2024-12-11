<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CalendarQueryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('teacher', TeacherAutocompleteField::class/*, [
                'label' => 'Wykładowca',
                'required' => false,
                'autocomplete'=>true,
            ]*/)
            ->add('room', TextType::class, [
                'label' => 'Sala',
                'required' => false,
            ])
            ->add('course', TextType::class, [
                'label' => 'Przedmiot',
                'required' => false,
            ])
            ->add('group', TextType::class, [
                'label' => 'Grupa',
                'required' => false,
            ])
            ->add('album', TextType::class, [
                'label' => 'Numer albumu',
                'required' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
