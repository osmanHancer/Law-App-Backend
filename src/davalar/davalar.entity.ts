import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity('Davalar')
export class DavalarEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  dosyaNo: string;

  @Column()
  mail: string;

  // Davacı Bilgileri
  @Column()
  davaciAdi: string;
  
  @Column()
  davaciSoyadi: string;
  
  @Column()
  davaciAdresi: string;
  
  @Column()
  davaciIletisim: string;
  
  @Column()
  davaciMeslegi: string;

  // Davalı Bilgileri
  @Column()
  davaliAdi: string;
  
  @Column()
  davaliSoyadi: string;
  
  @Column()
  davaliAdresi: string;
  
  @Column()
  davaliIletisim: string;
  
  @Column()
  davaliMeslegi: string;

  // Genel Bilgiler
  @Column()
  genelBilgiler: string;
  
  @Column()
  il: string;
  
  @Column({ type: 'date' })
  baslamaTarihi: Date;
  
  @Column()
  gorevliMahkeme: string;
  
  @Column()
  davaAsamasi: string;
  
  @Column()
  notlar: string;

  // Diğer Özellikler (isteğe bağlı)
  @UpdateDateColumn({ type: 'datetime' })
  updatedAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  createdAt: Date;
}
