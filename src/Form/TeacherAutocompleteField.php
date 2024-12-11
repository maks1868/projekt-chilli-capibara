<?php

namespace App\Form;

use App\Entity\Teacher;
use Symfony\Component\Validator\Constraints\Count;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Autocomplete\Form\AsEntityAutocompleteField;
use Symfony\UX\Autocomplete\Form\BaseEntityAutocompleteType;

#[AsEntityAutocompleteField]
class TeacherAutocompleteField extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'class' => Teacher::class,
            'searchable_fields' => ['name'],
            'label' => 'Wykładowca',
            'choice_label' => 'name',
            'multiple' => false,
            'constraints' => [
            new Count(['min' => 1, 'minMessage' => 'You must select at least one teacher.'])
            ],
            // 'security' => 'ROLE_SOMETHING',
        ]);
    }

    public function getParent(): string
    {
        return BaseEntityAutocompleteType::class;
    }
}
