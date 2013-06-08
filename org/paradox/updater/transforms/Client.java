package org.paradox.updater.transforms;

import org.objectweb.asm.tree.FieldNode;
import org.paradox.updater.handle.Updater;
import org.paradox.updater.model.ClassNode;
import org.paradox.updater.model.Transform;

/**
 * Created with IntelliJ IDEA.
 * User: jeronimo078
 * Date: 06-06-13
 * Time: 18:33
 * To change this template use File | Settings | File Templates.
 */
public class Client extends Transform {

    @Override
    public boolean validate(ClassNode classNode) {
        return classNode.getName().equals("client");
    }

    @Override
    public void execute(ClassNode classNode) {
        long timer = System.currentTimeMillis();
        for(FieldNode field : classNode.getFields()) {
            int count2 = 0;
            if(field.desc.contains("L")) {
                String name = field.desc;
                for(FieldNode field2 : classNode.getFields()) {
                    if(field2.desc.contains("[" +name)) {
                        count2++;

                    }

                }
            }

            if(count2 == 1 && getCount(field.desc, classNode.getFields()) == 2)  {

                System.out.println("Welcome to Paradox' updater\nA lot of thanks for Parameter for his help!\nUpdater found the following classes:\n");

                String player = field.desc.replace("L", "").replace(";", "");
                System.out.println("Player class is " + player) ;

                String entity = new ClassNode(Updater.classes.get(player)).getSuperName();
                System.out.println("Entity class is " + entity);


                for(Object object : Updater.classes.values()) {
                    ClassNode node = new ClassNode((org.objectweb.asm.tree.ClassNode)object);
                    if(node.getSuperName().equals(entity) && !node.getName().equals(player)) {
                        System.out.println("NPC class is " + node.getName());
                    }
                }
                String animable = new ClassNode(Updater.classes.get(entity)).getSuperName();
                System.out.println("Animable class is " + animable);

                String nodesub = new ClassNode(Updater.classes.get(animable)).getSuperName();
                System.out.println("Nodesub class is " + nodesub);

                String node = new ClassNode(Updater.classes.get(nodesub)).getSuperName();
                System.out.println("Node class is " + node);

                String rsapplet = new ClassNode(Updater.classes.get("client")).getSuperName();
                System.out.println("Node class is " + rsapplet);

                long elapsedTime = System.nanoTime() - timer;
                float time = elapsedTime / 1000F;
                System.out.println("This all took us "+ time + " seconds");


            }
        }


    }

    public int getCount(String desc, FieldNode[] fields) {
        int total = 0;
        for(FieldNode f : fields) {
            if(f.desc.contains(desc)) {
                total++;
            }
        }
        return total;
    }

}
