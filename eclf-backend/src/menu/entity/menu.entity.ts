import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  path: string;

  @Column({ nullable: true })
  fullPath: string;

  @Column({ nullable: true })
  icon: string;

  @Column({ default: 0 })
  localOrder: number; // For sorting menu items

  @Column({ default: 0 })
  layoutType: string; // For sorting menu items

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  // This connects child menus to their parent
  @ManyToOne(() => Menu, (menu) => menu.children)
  parent: Menu | null;

  // This connects a parent to its children
  @OneToMany(() => Menu, (menu) => menu.parent)
  children: Menu[];
}
