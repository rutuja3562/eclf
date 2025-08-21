import { Menu } from 'src/menu/entity/menu.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MenuDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  component: string; // e.g. "TextBlock"

  @Column({ type: 'jsonb', nullable: true })
  data: Record<string, any>; //json data or raw content

  @ManyToOne(() => Menu, (menu) => menu.details, { onDelete: 'CASCADE' })
  menu: Menu;

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
}
