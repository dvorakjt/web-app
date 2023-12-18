import { useContext, useState, useEffect, useRef, useId} from 'react';
import { FormContext, Validity, validityToString, getAriaDescribedBy, Visited, Modified } from 'modeled-forms-react';
import styles from '../../styles/modules/components/form-elements/select.module.scss';
import selectCaret from '../../../public/assets/2-shapes/select-caret.svg';
import Image from 'next/image';
import { NullOrUndefinedContextError } from '../../errors/null-or-undefined-context-error';

interface Option {
  text : string;
  value : string;
}

interface SelectProps {
  fieldName : string;
  label : string;
  options : Array<Option>;
}

export function Select({ fieldName, label, options } : SelectProps) {
  const formCtx = useContext(FormContext);
  if(!formCtx) throw new NullOrUndefinedContextError('Select', 'FormContext');

  const { useField, useConfirmationAttempted } = formCtx;
  const { value, updateValue, validity, modified, visited, messages, visit } = useField(fieldName);
  const confirmationAttempted = useConfirmationAttempted();
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    function handleClickOutsideComboBox(e : MouseEvent) {
      let node = e.target as HTMLElement | ParentNode | null;
      while(node) {
        if(node == selectRef.current) return;
        node = node.parentNode;
      }
      setOpen(false);
      visit();
    }
    document.addEventListener("click", handleClickOutsideComboBox);
    return () => document.removeEventListener("click", handleClickOutsideComboBox);
  }, [visit]);

  return (
    <button 
      role='combobox'
      aria-expanded={open}
      aria-controls={menuId}
      ref={selectRef}
      onClick={(e) => {
        e.preventDefault();
        setOpen(!open)
      }} 
      onKeyDown={({ key }) => {
        const focusedElement = document.activeElement;

        if(key === 'ArrowDown')
        {
          if(focusedElement == selectRef.current)
          {
            (focusedElement?.children[1]?.children[0] as HTMLElement).focus();
          }
          else if(focusedElement?.nextSibling)
          {
            (focusedElement.nextSibling as HTMLElement).focus();
          }
        }
        else if(key === 'ArrowUp')
        {
          if(focusedElement == selectRef.current?.children[1]?.children[0])
          {
            selectRef.current?.focus();
          }
          else if(focusedElement?.previousSibling)
          {
            (focusedElement.previousSibling as HTMLElement).focus();
          }
        }
      }}
      className={styles.select}
      data-validity={(confirmationAttempted || visited === Visited.YES || modified === Modified.YES) ? validityToString(validity) : validityToString(Validity.VALID_FINALIZABLE)} 
      aria-describedby={(confirmationAttempted || visited === Visited.YES || modified === Modified.YES) ? getAriaDescribedBy(fieldName, messages) : ""}
    >
      {value || label}
      <Image src={selectCaret} alt="" />
      {open &&
        <menu className={styles.menu} id={menuId}>
          {options.map(option => {
            return (
              <li 
                tabIndex={-1}
                onClick={() => {
                  updateValue(option.value)
                  setOpen(false); //useEffect when value changes
                }} 
                onKeyDown={({ key }) => {
                  if(key == 'Enter')
                  {
                    updateValue(option.value);
                    selectRef.current?.focus();
                  }
                }}
                key={option.value}
                className={styles.option}
              >
                {option.text}
              </li>
            )
          })}
        </menu>
      }
    </button>
  )
}